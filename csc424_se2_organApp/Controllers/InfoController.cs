using System;
using System.Linq;
using System.Threading;
using csc424_se2_organApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;

namespace csc424_se2_organApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class InfoController : Controller{

       
        private readonly organ_appContext context;
    
        public InfoController(organ_appContext _context)         
        {             
            context = _context;       
        }
    
    
    [HttpPost]
    public JsonResult UploadInfo([FromBody]Info record){
        var Email = record.Email;
        Console.WriteLine("insert");
        Console.WriteLine($"*******************************{Email}");
        // var findUser = (from c in context.Users 
        //                 where c.Email == Email
        //                 select c)
        var isInDb = context.Users.Find(Email);
        if(isInDb ==null){
            Response.StatusCode = 404;
            return Json(new {error= "Record not found"});
        }
        context.Info.Add(record);
        context.SaveChanges();
        

        return Json(new {success = "success"});

    }
    [HttpPost]
    public JsonResult HasInfo([FromBody]dynamic record){
        string email =record.email;
        Console.WriteLine(email);
        var isInDb = context.Info.Find(email);
        if(isInDb == null){
            Response.StatusCode = 404;
            return Json(new {error = "User Must Fill Out information"});
        }
        else{
            return Json(isInDb);
        }
    }


    }
}