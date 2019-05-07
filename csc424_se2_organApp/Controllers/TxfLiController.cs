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

    /// <summary>The TxfLi Controller.</summary>
    /// <remarks>api/TxfLi/[action]</remarks>
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TxfLiController : Controller{


        private readonly organ_appContext context;
        /// <summary>Reference database context</summary>
        public TxfLiController(organ_appContext _context)
        {
            context = _context;
        }

        [HttpPost]
        public JsonResult UpdateRecord([FromBody]TxfLi input){
            
            try{
                context.TxfLi.Update(input);
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
        /// <remarks>api/TxfLi/GetRecordTxli</remarks>
        /// <param name="input">Requires in the body: TrrFolId</param>
        [HttpPost]
        public JsonResult GetRecordTxfLi([FromBody]dynamic input){
            Console.WriteLine(input);
            int num = input.TrrFolId;
            var isInDb = context.TxfLi.Where(r => r.TrrFolId == num)
                                        .FirstOrDefault<TxfLi>();
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
            foreach(var a in input.TxfLi){
                num = a;
                var isInDb = context.TxfLi.Where(r => r.TrrFolId == num)
                                            .FirstOrDefault<TxfLi>();
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

        

        /// <summary>Search for a limited number of records by PX ID</summary>
        /// <remarks>api/TxfLi/SearchRecordTrrFolIdFirstX</remarks>
        /// <param name="input">Requires in the body: TrrFolId, number</param>
        [HttpPost]
        public JsonResult SearchRecordTrrFolIdFirstX([FromBody]dynamic input){
            //Console.WriteLine(input);
            string id = input.TrrFolId;
            int num = input.number;
            var isInDb = (from c in context.TxfLi
                        where c.TrrFolId.ToString().Contains(id)
                        select c.TrrFolId).Take(num);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }


        /// <summary>Search for a all records by partial PX ID</summary>
        /// <remarks>api/TxfLi/SearchRecordTrrFolId</remarks>
        /// <param name="input">Requires in the body: PersId, number</param>
        [HttpPost]
        public JsonResult SearchRecordTrrFolId([FromBody]dynamic input){
            //Console.WriteLine(input);
            string id = input.TrrFolId;
            var isInDb = (from c in context.TxfLi
                        where c.TrrFolId.ToString().Contains(id)
                        select c.TrrFolId);
            Response.StatusCode = 201;
            return Json(data: isInDb);

        }
    }
}