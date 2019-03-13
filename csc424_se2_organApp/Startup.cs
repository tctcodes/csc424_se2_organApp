using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using csc424_se2_organApp.Models;
using Microsoft.EntityFrameworkCore;

namespace csc424_se2_organApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //var connection = "server=192.168.2.111;port=5432;Database=organ_app;Username=pi;Password=almost";
            services.AddDbContext<organ_appContext>(options =>
            options.UseNpgsql("server=192.168.2.111;port=5432;Database=organ_app;Username=pi;Password=almost"));
            
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
