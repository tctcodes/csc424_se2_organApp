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
        private readonly organ_appContext _context;
    
        public AddUserController(organ_appContext context)         
        {             
            _context = context;       
        }
        [HttpPost]
        //x[EnableCors("CORSpolicy")]
        public JsonResult NewUser([FromBody]Users user){
            
            user.Password = BCrypt.HashPassword(user.Password);
           // _context.Users.Add(user);
            //_context.SaveChanges();
            return Json(user);
        
        }
    }

}