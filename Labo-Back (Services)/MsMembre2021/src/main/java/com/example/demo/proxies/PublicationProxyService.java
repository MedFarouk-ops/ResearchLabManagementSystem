package com.example.demo.proxies;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.beans.PublicationBean;

@FeignClient(name="PUBLICATION-SERVICE")
public interface PublicationProxyService {
	@GetMapping("/publications/{id}")
	public PublicationBean findPublicationById(@PathVariable(name = "id") Long id);
	
}
