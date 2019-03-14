using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using BCrypt.Net;
using csc424_se2_organApp.Models;

namespace csc424_se2_organApp.Controllers
{
    using BCrypt = BCrypt.Net.BCrypt;
    
    [Route("api/[controller]")]
    [ApiController]
    public class AddUserController : Controller{

        private static ActionResult Result(int statusCode, string reason) => new ContentResult
        {
            StatusCode = statusCode,
            Content = $"Status Code: {(int)statusCode}; {statusCode}; {reason}",
            ContentType = "text/plain"
        };
        private readonly organ_appContext context;
    
        public AddUserController(organ_appContext _context)         
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
    }

}