using System.Web.Http;
using System.Web.Routing;
using Newtonsoft.Json.Serialization;

namespace ElasticMonkey.LeeAndRobynWedding.Web
{
    public static class WebApiConfig
    {

        public static void RegisterRoutes(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

        }

        public static void RegisterGlobal(HttpConfiguration config)
        {
            // Use camel case for JSON data.
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver(); 
        }
    }
}