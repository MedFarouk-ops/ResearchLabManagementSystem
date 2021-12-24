package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.discovery.ReactiveDiscoveryClient;
import org.springframework.cloud.gateway.discovery.DiscoveryClientRouteDefinitionLocator;
import org.springframework.cloud.gateway.discovery.DiscoveryLocatorProperties;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class GatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}
	// une telle configuration nécessite la connaissance de tous les microservices dans l'app 
	//et à chaque nouvel ajout on doit modifier le code 
	//@Bean
	RouteLocator routeLocator(RouteLocatorBuilder builder)
	{
		return builder.routes()
				.route(r->r.path("/membres/**").uri("lb://MEMBRE-SERVICE"))
				.route(r->r.path("/publications/**").uri("lb://PUBLICATION-SERVICE"))
				.route(r->r.path("/outils/**").uri("lb://OUTIL-SERVICE"))
				.route(r->r.path("/evenements/**").uri("lb://EVENEMENT-SERVICE"))
				.build();
	}
	@Bean
	DiscoveryClientRouteDefinitionLocator definitionLocator(
			ReactiveDiscoveryClient rdc, 
			DiscoveryLocatorProperties dlp)
	{
		return new DiscoveryClientRouteDefinitionLocator(rdc, dlp);
	}
	

}
