using System;
using System.Linq;
using System.Threading;
using csc424_se2_organApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;

namespace csc424_se2_organApp.Controllers
{
    /// <summary>The User Info Controller.</summary>
    /// <remarks>api/Info/[action]</remarks>
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class InfoController : Controller{

       
        private readonly organ_appContext context;
        /// <summary>Reference database context</summary>

        public InfoController(organ_appContext _context)         
        {             
            context = _context;       
        }
    
    /// <summary>Upload new info</summary>
    /// <remarks>api/Info/UploadInfo</remarks>
    /// <param name="record">Requires an entire Info record</param>
    /// <returns>Success if user exists</returns>
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

    /// <summary>Check if Info exists</summary>
    /// <remarks>api/Info/HasInfo</remarks>
    /// <param name="record">Requires in body: email</param>
    /// <returns>Info record if found</returns>
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