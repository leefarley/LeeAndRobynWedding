using System.Collections.Generic;

namespace ElasticMonkey.LeeAndRobynWedding.Web.Models
{
    public class Invitation
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string DietryRequirements { get; set; }

        public virtual IList<Person> People { get; set; }
    }
}