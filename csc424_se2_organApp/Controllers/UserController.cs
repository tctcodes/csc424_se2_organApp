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
using Microsoft.AspNetCore.Authorization;

namespace csc424_se2_organApp.Controllers
{
    using BCrypt = BCrypt.Net.BCrypt;


    /// <summary>The User Controller.</summary>
    /// <remarks>api/User/[action]</remarks>
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : Controller{

        private readonly organ_appContext context;
        /// <summary>Reference database context</summary>
        public UserController(organ_appContext _context)
        {
            context = _context;
        }

        /// <summary>Create a New User</summary>
        /// <remarks>api/User/NewUser</remarks>
        /// <remarks>The password is stored hashed</remarks>
        /// <param name="user">In body: Users record</param>
        /// <returns>Success/fail message</returns>
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

        /// <summary>Login a User</summary>
        /// <remarks>api/User/AuthUser</remarks>
        /// <remarks>JWT stores email and role, with 30 min expiration</remarks>
        /// <param name="user">In Body: Email, Password</param>
        /// <returns>JWT</returns>
        [HttpPost]
        public JsonResult AuthUser([FromBody]Users user){

            //Console.Write(user.Email);
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
                var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("THIS IS MY RIFLE THIS IS MY GUN, THIS ONE'S FOR FIGHTING THIS ONE'S FOR FUN"));
                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, foundUser.Email),
                    new Claim(ClaimTypes.Role, foundUser.Role)
                };
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);
                var token = new JwtSecurityToken(
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds
                );
                return Json(new {message = $"{foundUser.Email} signed in", token = new JwtSecurityTokenHandler().WriteToken(token)});
            }
        }

        /// <summary>Another test route</summary>
        /// <remarks>api/User/AuthToken</remarks>
        /// <param>Requires JWT in auth header</param>
        /// <returns>Auth Success/fail</returns>
        // [Authorize]
        [HttpGet]
        public JsonResult AuthToken(){
            Console.WriteLine(User.Identity.Name);
            Console.WriteLine(User.Claims.Where(c => c.Type == ClaimTypes.Role).Select(c => c.Value).SingleOrDefault());
            return Json (
                new {message="Authorized", name=$"{User.Identity.Name}", role=$"{User.Claims.Where(c => c.Type == ClaimTypes.Role).Select(c => c.Value).SingleOrDefault()}"}
            );
        }
        
        /// <summary>Test</summary>
        /// <remarks>api/User/test</remarks>
        /// <param>Requires JWT in auth header</param>
        /// <returns>Auth Success/fail</returns>
        [Authorize(Roles = "staff")]
        [HttpGet]
        public JsonResult test(){
            Console.WriteLine(User.Identity.Name);
            Console.WriteLine(User.Claims.Where(c => c.Type == ClaimTypes.Role).Select(c => c.Value).SingleOrDefault());
            return Json (new {message="Authorized"});
        }

    }

}
