package com.dev.application.service;

import java.util.List;

import com.dev.application.model.CRUDApplicationProject;

public interface CRUDApplicationProjectServiceInterface {

	List<CRUDApplicationProject> getDetails();
	
	List<CRUDApplicationProject> insertDetail(CRUDApplicationProject crudApplicationProject);
	
	List<CRUDApplicationProject> updateDetails(CRUDApplicationProject crudApplicationProject);
	
	List<CRUDApplicationProject> deleteDetail(int id);
	
}
