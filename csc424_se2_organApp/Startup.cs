using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using csc424_se2_organApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;
namespace csc424_se2_organApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddEntityFrameworkNpgsql().AddDbContext<organ_appContext>(options =>
            options.UseNpgsql("server=192.168.2.111;port=5432;Database=organ_app;Username=pi;Password=almost"));
            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins,
                    builder => builder.AllowAnyHeader()
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                   );
            });
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    //ValidIssuer = "yourdomain.com",
                    //ValidAudience = "yourdomain.com",
                    IssuerSigningKey = new SymmetricSecurityKey(
                        Encoding.ASCII.GetBytes("THIS IS MY RIFLE THIS IS MY GUN, THIS ONE'S FOR FIGHTING THIS ONE'S FOR FUN")
                        )
                };
            });
                services.AddMvc().AddJsonOptions(options => {
                            options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                });
                services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

                // In production, the React files will be served from this directory
                services.AddSpaStaticFiles(configuration =>
                {
                    configuration.RootPath = "ClientApp/build";
                });
            }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {   
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }
            
            app.UseAuthentication();
            app.UseCors(MyAllowSpecificOrigins);
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
           
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            // app.UseSpa(spa =>
            // {
            //     spa.Options.SourcePath = "ClientApp";

            //    if (env.IsDevelopment())
            //     {
            //         //spa.UseReactDevelopmentServer(npmScript: "start");
            //         spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");
            //     }
            // });
        }
    }
}
