using System;
using System.Diagnostics;
using System.IdentityModel;
using System.Web.Http;
using ElasticMonkey.LeeAndRobynWedding.Web.Services;
using ElasticMonkey.LeeAndRobynWedding.Web.Models;
using Newtonsoft.Json;

namespace ElasticMonkey.LeeAndRobynWedding.Web.controllers
{
    public class RsvpController : ApiController
    {
        private readonly DataService _dataService;
        public RsvpController()
        {
            _dataService = new DataService();
        }

        // POST api/<controller>/
        [HttpPost]
        public Invitation Post([FromBody] CodeRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Code))
                throw new BadRequestException();

            var invitation = _dataService.GetInvitation(request.Code);

            if (invitation != null)
                return invitation;

            return null;
        }

        // PUT api/<controller>/5
        [HttpPut]
        public bool Put([FromBody]Invitation invitation)
        {
            try
            {
                _dataService.UpdateInvitation(invitation);
            }
            catch (Exception ex)
            {
                Trace.TraceError("Something went wrong updating invitation : {0}, exception : {1}", JsonConvert.SerializeObject(invitation), ex);
                return false;
            }
            return true;
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }

    public class CodeRequest
    {
        public string Code { get; set; }
    }
}