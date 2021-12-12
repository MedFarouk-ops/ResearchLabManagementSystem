package com.example.demo.proxies;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.beans.OutilBean;
import com.example.demo.beans.PublicationBean;

@FeignClient(name="OUTIL-SERVICE")
public interface OutilProxyService {
	@GetMapping("/outils/{id}")
	public OutilBean findOutilById(@PathVariable(name = "id") Long id);


}
