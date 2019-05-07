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

    /// <summary>The Donor Controller.</summary>
    /// <remarks>api/DonDec/[action]</remarks>
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DonDecController : Controller{


        private readonly organ_appContext context;
        /// <summary>Reference database context</summary>
        public DonDecController(organ_appContext _context)
        {
            context = _context;
        }

        [HttpPost]
        public JsonResult UpdateRecord([FromBody]DonorDeceased input){
            
            try{
                context.DonorDeceased.Update(input);
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
        /// <remarks>api/DonDec/GetRecordPersId</remarks>
        /// <param name="input">Requires in the body: PersId</param>
        [HttpPost]
        public JsonResult GetRecordPersId([FromBody]dynamic input){
            Console.WriteLine(input);
            int num = input.PersId;
            var isInDb = context.DonorDeceased.Where(r => r.PersId == num)
                                        .FirstOrDefault<DonorDeceased>();
            if(isInDb == null){
                Response.StatusCode = 404;
                return Json(new {error="Not Found"}); 
            }
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }
        [HttpPost]
        public IActionResult DownloadRecord([FromBody] dynamic input){
            int num;
            var arr = new List<dynamic>();
            foreach(var a in input.DonorId){
                num = a;
                var isInDb = context.DonorDeceased.Where(r => r.DonorId == num)
                                            .FirstOrDefault<DonorDeceased>();
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
        /// <summary>Get a record by Donor ID</summary>
        /// <remarks>api/DonDec/GetRecordDonorId</remarks>
        /// <param name="input">Requires in the body: DonorId</param>
        [HttpPost]
        public JsonResult GetRecordDonorId([FromBody]dynamic input){
            Console.WriteLine(input);
            int num = input.DonorId;
            var isInDb = context.DonorDeceased.Where(r => r.DonorId == num)
                                        .FirstOrDefault<DonorDeceased>();
            if(isInDb == null){
                Response.StatusCode = 404;
                return Json(new {error="Not Found"}); 
            }
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }

        /// <summary>Get a record by State</summary>
        /// <remarks>api/DonDec/GetRecordByState</remarks>
        /// <param name="input">Requires in the body: state</param>
        [HttpPost]
        public JsonResult GetRecordByState([FromBody]dynamic input){
            //Console.WriteLine(input.state);
            string state = input.state;
            var query = (from c in context.DonorDeceased 
                        where c.DonHomeState == state
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
        /// <remarks>api/DonDec/GetRecordByBloodType</remarks>
        /// <param name="input">Requires in the body: bloodType</param>
        [HttpPost]
        public JsonResult GetRecordByBloodType([FromBody]dynamic input){
            string type = input.bloodType;
            var query = (from c in context.DonorDeceased
                        where c.DonAbo == type
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
        /// <remarks>api/DonDec/SearchRecordPersIdFirstX</remarks>
        /// <param name="input">Requires in the body: PersId, number</param>
        [HttpPost]
        public JsonResult SearchRecordPersIdFirstX([FromBody]dynamic input){
            //Console.WriteLine(input);
            string id = input.PersId;
            int num = input.number;
            var isInDb = (from c in context.DonorDeceased
                        where c.PersId.ToString().Contains(id)
                        select c.PersId).Take(num);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }

        /// <summary>Search for a limited number of records by Donor ID</summary>
        /// <remarks>api/DonDec/SearchRecordDonorIdFirstX</remarks>
        /// <param name="input">Requires in the body: DonorId, number</param>
        [HttpPost]
        public JsonResult SearchRecordDonorIdFirstX([FromBody]dynamic input){
            //Console.WriteLine(input);
            string id = input.DonorId;
            int num = input.number;
            var isInDb = (from c in context.DonorDeceased
                        where c.DonorId.ToString().Contains(id)
                        select c.DonorId).Take(num);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }

        /// <summary>Search for all records by partial PERS ID</summary>
        /// <remarks>api/DonDec/SearchRecordPersId</remarks>
        /// <param name="input">Requires in the body: PersId</param>
        [HttpPost]
        public JsonResult SearchRecordPersId([FromBody]dynamic input){
            //Console.WriteLine(input);
            string id = input.PersId;
            var isInDb = (from c in context.DonorDeceased
                        where c.PersId.ToString().Contains(id)
                        select c.PersId);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }

        /// <summary>Search for a all records by partial Donor ID</summary>
        /// <remarks>api/DonDec/SearchRecordDonorId</remarks>
        /// <param name="input">Requires in the body: PersId, number</param>
        [HttpPost]
        public JsonResult SearchRecordDonorId([FromBody]dynamic input){
            //Console.WriteLine(input);
            string id = input.DonorId;
            var isInDb = (from c in context.DonorDeceased
                        where c.DonorId.ToString().Contains(id)
                        select c.DonorId);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }
    }
}