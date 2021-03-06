using System;
using System.Linq;
using System.Threading;
using csc424_se2_organApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Net.Http;
using Newtonsoft.Json;
using System.IO;
using System.Net;
using System.Text;
using System.Collections.Generic;


namespace csc424_se2_organApp.Controllers
{

    /// <summary>The Candidate Controller.</summary>
    /// <remarks>api/Cand/[action]</remarks>
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CandController : Controller{


        private readonly organ_appContext context;
        /// <summary>Reference database context</summary>
        public CandController(organ_appContext _context)
        {
            context = _context;
        }

        /// <summary>Update entire record</summary>
        /// <remarks>api/Cand/UpdateRecord</remarks>
        /// <param name="input">Requires an entire CandLiin record</param>
        /// <returns>Success?</returns>
        [HttpPost]
        public JsonResult UpdateRecord([FromBody]CandLiin input){
            
            try{
                context.CandLiin.Update(input);
                context.SaveChanges();
                Response.StatusCode = 201;
                return Json(new {success=true});
            }
            catch{
                Response.StatusCode = 400;
                return Json(new {error="error has occured"});
            }
            
        }

        /// <summary>Get a record by PERS ID</summary>
        /// <remarks>api/Cand/GetRecordPersId</remarks>
        /// <param name="input">Requires in the body: PersId</param>
        /// <returns>Single CandLiin record if found</returns>
        [HttpPost]
        public JsonResult GetRecordPersId([FromBody]dynamic input){
            Console.WriteLine(input);
            int num = input.PersId;
            var isInDb = context.CandLiin.Where(r => r.PersId == num)
                                        .FirstOrDefault<CandLiin>();
            if(isInDb == null){
                Response.StatusCode = 404;
                return Json(new {error="Not Found"}); 
            }
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }

        /// <summary>Retreive a file of records</summary>
        /// <remarks>api/Cand/DownloadRecord</remarks>
        /// <param name="input">Requires an array of PxId's in body</param>
        /// <returns>Array of CandLiin records in a file</returns>
        [HttpPost]
        public IActionResult DownloadRecord([FromBody] dynamic input){
            int num;
            var arr = new List<dynamic>();
            foreach(var a in input.PxId){
                num = a;
                var isInDb = context.CandLiin.Where(r => r.PxId == num)
                                            .FirstOrDefault<CandLiin>();
                if(isInDb == null){
                    Response.StatusCode = 404;
                    Console.WriteLine("fuck");
                    return Json(new {error="Not Found"}); 
                }
                
                var data = Json(isInDb);
                arr.Add(data.Value);
            }
            //var returnVal = new {list = arr};
            string ret = JsonConvert.SerializeObject(arr,Formatting.Indented);
            byte[] byteArray = Encoding.ASCII.GetBytes(ret);
            MemoryStream stream = new MemoryStream( byteArray ); 
 
            // convert stream to string
            StreamReader reader = new StreamReader( stream );
            string text = reader.ReadToEnd();
            string fileName =$"patient_data.json";
            return File(byteArray, "application/octet-stream",fileName);

            
        }

        /// <summary>Get a record by PX ID</summary>
        /// <remarks>api/Cand/GetRecordPxId</remarks>
        /// <param name="input">Requires in the body: PxID</param>
        /// <returns>Single CandLiin record if found</returns>
        [HttpPost]
        public JsonResult GetRecordPxId([FromBody]dynamic input){
            Console.WriteLine(input);
            int num = input.PxId;
            var isInDb = context.CandLiin.Where(r => r.PxId == num).FirstOrDefault<CandLiin>();
            
            if(isInDb == null){
                Response.StatusCode = 404;
                return Json(new {error="Not Found"}); 
            }
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }

        /// <summary>Get a record by State</summary>
        /// <remarks>api/Cand/GetRecordByState</remarks>
        /// <param name="input">Requires in the body: state</param>
        /// <returns>Array of CandLiin records</returns>
        [HttpPost]
        public JsonResult GetRecordByState([FromBody]dynamic input){
            //Console.WriteLine(input.state);
            string state = input.state;
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

        /// <summary>Get a record by Blood Type</summary>
        /// <remarks>api/Cand/GetRecordByBloodType</remarks>
        /// <param name="input">Requires in the body: bloodType</param>
        /// <returns>Array of CandLiin records</returns>
        [HttpPost]
        public JsonResult GetRecordByBloodType([FromBody]dynamic input){
            string type = input.bloodType;
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

        /// <summary>Search for a limited number of records by PERS ID</summary>
        /// <remarks>api/Cand/SearchRecordPersIdFirstX</remarks>
        /// <param name="input">Requires in the body: PersId, number</param>
        /// <returns>A number of PersId's in an array</returns>
        [HttpPost]
        public JsonResult SearchRecordPersIdFirstX([FromBody]dynamic input){
            //Console.WriteLine(input);
            string id = input.PersId;
            int num = input.number;
            var isInDb = (from c in context.CandLiin
                        where c.PersId.ToString().Contains(id)
                        select c.PersId).Take(num);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }

        /// <summary>Search for a limited number of records by PX ID</summary>
        /// <remarks>api/Cand/SearchRecordPxIdFirstX</remarks>
        /// <param name="input">Requires in the body: PxId, number</param>
        /// <returns>A number of matching PxId's in an array</returns>
        [HttpPost]
        public JsonResult SearchRecordPxIdFirstX([FromBody]dynamic input){
            string id = input.PxId;
            int num = input.number;
            var isInDb = (from c in context.CandLiin
                        where c.PxId.ToString().Contains(id)
                        select c.PxId).Take(num);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }

        /// <summary>Search for all records by partial PERS ID</summary>
        /// <remarks>api/Cand/SearchRecordPersId</remarks>
        /// <param name="input">Requires in the body: PersId</param>
        /// <returns>An array of CandLiin records</returns>
        [HttpPost]
        public JsonResult SearchRecordPersId([FromBody]dynamic input){
            //Console.WriteLine(input);
            string id = input.PersId;
            var isInDb = (from c in context.CandLiin
                        where c.PersId.ToString().Contains(id)
                        select c.PersId);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }

        /// <summary>Search for a all records by partial PxId</summary>
        /// <remarks>api/Cand/SearchRecordPxId</remarks>
        /// <param name="input">Requires in the body: PxId</param>
        /// <returns>All matching PxId's in an array</returns>
        [HttpPost]
        public JsonResult SearchRecordPxId([FromBody]dynamic input){
            //Console.WriteLine(input);
            string id = input.PxId;
            var isInDb = (from c in context.CandLiin
                        where c.PxId.ToString().Contains(id)
                        select c.PxId);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }

        /// <summary>Composed search</summary>
        /// <remarks>api/Cand/RefinedSearch</remarks>
        /// <param name="input">Requires in the body: PxId, BloodGroup, PxState, num</param>
        /// <returns>An array of matching CandLiin records</returns>
        [HttpPost]
        public JsonResult RefinedSearch([FromBody]dynamic input){
            Console.WriteLine(input);
            string id = input.PxId;
            string bloodType = input.BloodGroup;
            string pxState = input.PxState;
            int num = input.num;
            List<csc424_se2_organApp.Models.CandLiin> isInDb;
            if(!String.IsNullOrEmpty(id) && String.IsNullOrEmpty(bloodType) && String.IsNullOrEmpty(pxState)){
                isInDb = (from c in context.CandLiin
                    where c.PxId.ToString().Contains(id)
                    select c).ToList();
            }
            else if(!String.IsNullOrEmpty(id) && !String.IsNullOrEmpty(bloodType) && String.IsNullOrEmpty(pxState)){
                Console.WriteLine("true");
                isInDb = (from c in context.CandLiin
                    where c.PxId.ToString().Contains(id) &&
                    c.CanAbo == bloodType
                    select c).ToList();
            }
            else if(!String.IsNullOrEmpty(id) && String.IsNullOrEmpty(bloodType) && !String.IsNullOrEmpty(pxState)){
                Console.WriteLine("true");
                isInDb = (from c in context.CandLiin
                    where c.PxId.ToString().Contains(id) &&
                    c.CanPermState == pxState
                    select c).ToList();
            }
            else if(String.IsNullOrEmpty(id) && !String.IsNullOrEmpty(bloodType) && !String.IsNullOrEmpty(pxState)){
                Console.WriteLine("true");
                isInDb = (from c in context.CandLiin
                    where c.CanAbo == bloodType &&
                    c.CanPermState == pxState
                    select c).ToList();
            }
            else{
                isInDb = (from c in context.CandLiin
                    where c.PxId.ToString().Contains(id) &&
                    c.CanAbo == bloodType &&
                    c.CanPermState == pxState
                    select c).ToList();
            }

            if(isInDb == null){
                Response.StatusCode = 404;
                return Json(new {error="Not Found"});
            }
            Response.StatusCode = 201;
            return Json(data: isInDb);
        }
    }
}