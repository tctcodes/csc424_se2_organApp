using System;
using System.Linq;
using System.Threading;
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
        public JsonResult GetRecordPersId([FromBody]dynamic record){
            Console.WriteLine(record);
            int num = record.PersId;
            var isInDb = context.CandLiin.Where(r => r.PersId == num)
                                        .FirstOrDefault<CandLiin>();
            if(isInDb == null){
                Response.StatusCode = 404;
                return Json(new {error="Not Found"}); 
            }
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }
        [HttpPost]
        public JsonResult GetRecordPxId([FromBody]dynamic record){
            Console.WriteLine(record);
            int num = record.PxId;
            var isInDb = context.CandLiin.Where(r => r.PxId == num)
                                        .FirstOrDefault<CandLiin>();
            if(isInDb == null){
                Response.StatusCode = 404;
                return Json(new {error="Not Found"}); 
            }
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }
        [HttpPost]
        public JsonResult GetRecordByState([FromBody]dynamic record){
            Console.WriteLine(record.state);
            string state = record.state;
            var query = (from c in context.CandLiin 
                        where c.CanPermState == state
                        select c).ToList();
            if(query.Count == 0){
                Response.StatusCode = 404;
                return Json(new {error= "Not Found"});
            }
            Console.WriteLine(query.Count);
            Response.StatusCode = 201;
            return Json(query);

        }
        [HttpPost]
        public JsonResult GetRecordByBloodType([FromBody]dynamic record){
            string type = record.bloodType;
            var query = (from c in context.CandLiin
                        where c.CanAbo == type
                        select c).ToList();
            if(query.Count == 0){
                Response.StatusCode = 404;
                return Json(new {error= "Not Found"});
            }
            Console.WriteLine(query.Count);
            Response.StatusCode = 201;
            return Json(query);

        }
        [HttpPost]
        public JsonResult SearchRecordPersIdFirstX([FromBody]dynamic record){
            //Console.WriteLine(record);
            string id = record.PersId;
            int num = record.number;
            var isInDb = (from c in context.CandLiin
                        where c.PersId.ToString().Contains(id)
                        select c.PersId).Take(num);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }
        [HttpPost]
        public JsonResult SearchRecordPxIdFirstX([FromBody]dynamic record){
            //Console.WriteLine(record);
            string id = record.PxId;
            int num = record.number;
            var isInDb = (from c in context.CandLiin
                        where c.PxId.ToString().Contains(id)
                        select c.PxId).Take(num);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }
        [HttpPost]
        public JsonResult SearchRecordPersId([FromBody]dynamic record){
            //Console.WriteLine(record);
            string id = record.PersId;
            var isInDb = (from c in context.CandLiin
                        where c.PersId.ToString().Contains(id)
                        select c.PersId);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }
        [HttpPost]
        public JsonResult SearchRecordPxId([FromBody]dynamic record){
            //Console.WriteLine(record);
            string id = record.PxId;
            var isInDb = (from c in context.CandLiin
                        where c.PxId.ToString().Contains(id)
                        select c.PxId);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }
    }
}