using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using BCrypt.Net;
using csc424_se2_organApp.Models;

namespace csc424_se2_organApp.Controllers
{
    using BCrypt = BCrypt.Net.BCrypt;
    
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : Controller{

       
        private readonly organ_appContext context;
    
        public UserController(organ_appContext _context)         
        {             
            context = _context;       
        }
        
        [HttpPost]
        public JsonResult NewUser([FromBody]Users user){
            
            var isInDb = context.Users.Find(user.Email);
            if(isInDb != null){
                Response.StatusCode = 422;
                return Json(new {error="User Already Exists"}); 
            }
            user.Password = BCrypt.HashPassword(user.Password);
            context.Users.Add(user);
            context.SaveChanges(); 
            Response.StatusCode = 201;
            return Json(new {message = $"{user.Email} created"});
        
        }
        [HttpPost]
        public JsonResult AuthUser([FromBody]Users user){
            
            Console.Write(user.Email);
            Users foundUser = context.Users.Find(user.Email);
            if(foundUser == null){
                Response.StatusCode = 404;
                return Json(new {error="User Not Found"}); 
            }
            var validPw=BCrypt.Verify(user.Password,foundUser.Password);
            if(!validPw){
                Response.StatusCode = 403;
                return Json(new {error ="Invalid Password"});
            }
            else{
                
                Response.StatusCode = 200;
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes("THIS IS MY RIFLE THIS IS MY GUN, THIS ONE'S FOR FIGHTING THIS ONE'S FOR FUN");
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[] 
                    {
                          new Claim( ClaimTypes.UserData,
                            "IsValid", ClaimValueTypes.String, "(local)" )
                    }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                return Json(new {message = $"{foundUser.Email} signed in", token = token});
            }
            
        
        }
    }

}