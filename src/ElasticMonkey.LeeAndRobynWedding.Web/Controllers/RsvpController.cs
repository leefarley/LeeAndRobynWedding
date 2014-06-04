using System.Collections.Generic;
using System.Web.Http;

namespace ElasticMonkey.LeeAndRobynWedding.Web.controllers
{
    public class RsvpController : ApiController
    {
        // POST api/<controller>/
        [HttpPost]
        public Invitation Post([FromBody]string code)
        {
            return new Invitation
            {
                People = new []{
                    new Person
                    {
                        FirstName = "John",
                        LastName = "Doe",
                        IsAttending = false
                    }, new Person
                    {
                        FirstName = "Jane",
                        LastName = "Doe",
                        IsAttending = false
                    }
                }
            };
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }

    public class Invitation
    {
        public IList<Person> People { get; set; }
    }

    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsAttending { get; set; }
    }
}