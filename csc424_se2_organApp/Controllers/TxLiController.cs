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

    /// <summary>The TxLi Controller.</summary>
    /// <remarks>api/TxLi/[action]</remarks>
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TxLiController : Controller{


        private readonly organ_appContext context;
        /// <summary>Reference database context</summary>
        public TxLiController(organ_appContext _context)
        {
            context = _context;
        }

        /// <summary>Update entire record</summary>
        /// <remarks>api/TxLi/UpdateRecord</remarks>
        /// <param name="input">Requires an entire TxLi record</param>
        /// <returns>Success?</returns>
        [HttpPost]
        public JsonResult UpdateRecord([FromBody]TxLi input){
            
            try{
                context.TxLi.Update(input);
                context.SaveChanges();
                Response.StatusCode = 201;
                return Json(new {success=true});
            }
            catch{
                Response.StatusCode = 400;
                return Json(new {error="error has occured"});
            }
            
        }

        /// <summary>Get a record by TrrId</summary>
        /// <remarks>api/TxLi/GetRecordTxli</remarks>
        /// <param name="input">Requires in the body: TrrId</param>
        /// <returns>Single TxLi record if found</returns>        
        [HttpPost]
        public JsonResult GetRecordTrrId([FromBody]dynamic input){
            Console.WriteLine(input);
            int num = input.TrrId;
            var isInDb = context.TxLi.Where(r => r.TrrId == num)
                                        .FirstOrDefault<TxLi>();
            if(isInDb == null){
                Response.StatusCode = 404;
                return Json(new {error="Not Found"}); 
            }
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }
        
        /// <summary>Retreive a file of records</summary>
        /// <remarks>api/TxLi/DownloadRecord</remarks>
        /// <param name="input">Requires an array of TrrId's in body</param>
        /// <returns>Array of TxLi records in a file</returns>
        [HttpPost]
        public IActionResult DownloadRecord([FromBody] dynamic input){
            int num;
            var arr = new List<dynamic>();
            foreach(var a in input.TxLi){
                num = a;
                var isInDb = context.TxLi.Where(r => r.TrrId == num)
                                            .FirstOrDefault<TxLi>();
                if(isInDb == null){
                    Response.StatusCode = 404;
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


        /// <summary>Search for a limited number of records by TrrId</summary>
        /// <remarks>api/TxLi/SearchRecordTrrIdFirstX</remarks>
        /// <param name="input">Requires in the body: TrrId, number</param>
        /// <returns>A number of TrrId's in an array</returns>
        [HttpPost]
        public JsonResult SearchRecordTrrIdFirstX([FromBody]dynamic input){
            //Console.WriteLine(input);
            string id = input.TrrId;
            int num = input.number;
            var isInDb = (from c in context.TxLi
                        where c.TrrId.ToString().Contains(id)
                        select c.TrrId).Take(num);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }


        /// <summary>Search for a all records by partial TrrId</summary>
        /// <remarks>api/TxLi/SearchRecordTrrId</remarks>
        /// <param name="input">Requires in the body: TrrId, number</param>
        /// <returns>A number of matching TrrId's in an array</returns>        
        [HttpPost]
        public JsonResult SearchRecordTrrId([FromBody]dynamic input){
            //Console.WriteLine(input);
            string id = input.TrrId;
            var isInDb = (from c in context.TxLi
                        where c.TrrId.ToString().Contains(id)
                        select c.TrrId);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }
    }
}