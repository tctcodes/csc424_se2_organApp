using System;
using System.Linq;
using csc424_se2_organApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace csc424_se2_organApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CandController : Controller{

       
        private readonly organ_appContext context;
    
        public CandController(organ_appContext _context)         
        {             
            context = _context;       
        }
        
        [HttpPost]
        public JsonResult GetRecordPersId([FromBody]CandLiin record){
            //Console.WriteLine();
            var isInDb = context.CandLiin.Where(r => r.PxId == record.PxId && r.PersId == record.PersId)
                                        .FirstOrDefault<CandLiin>();
            if(isInDb == null){
                Response.StatusCode = 404;
                return Json(new {error="Not Found"}); 
            }
            Response.StatusCode = 201;
            return Json(data: isInDb);
        
        }

    }

}