﻿namespace ElasticMonkey.LeeAndRobynWedding.Web.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Attendance IsAttending { get; set; }
        public bool IsAdditionalGuest { get; set; }
    }
}