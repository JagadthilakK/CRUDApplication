package com.dev.application.dao;
import java.util.*;
import com.dev.application.model.CRUDApplicationProject;

public interface CRUDApplicationProjectDaoInterface {

	List<CRUDApplicationProject> getDetails();
	
	List<CRUDApplicationProject> insertDetail(CRUDApplicationProject crudApplicationProject);
	
	List<CRUDApplicationProject> updateDetail(CRUDApplicationProject crudApplicationProject);
	
	List<CRUDApplicationProject> deleteDetail(int id);
	
}
