package com.dev.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dev.application.model.CRUDApplicationProject;
import com.dev.application.service.CRUDApplicationProjectServiceInterface;

@RestController("/api")
public class CRUDApplicationProjectController {

	@Autowired
	private CRUDApplicationProjectServiceInterface crudApplicationProjectServiceInterface;
	
	@GetMapping("/getDetails")
	private List<CRUDApplicationProject> getDetails() {
		return crudApplicationProjectServiceInterface.getDetails();
	}
	
    @PostMapping("/insertDetail")
    public List<CRUDApplicationProject> insertDetail(@RequestBody CRUDApplicationProject detail) {
        return crudApplicationProjectServiceInterface.insertDetail(detail);
    }

    @PutMapping("/updateDetail")
    public List<CRUDApplicationProject> updateDetail(@RequestBody CRUDApplicationProject detail) {
        return crudApplicationProjectServiceInterface.updateDetails(detail);
    }

    @DeleteMapping("/deleteDetail/{id}")
    public List<CRUDApplicationProject> deleteDetail(@PathVariable int id) {
        return crudApplicationProjectServiceInterface.deleteDetail(id);
    }
}
