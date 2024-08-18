package com.dev.application.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.application.dao.CRUDApplicationProjectDaoInterface;
import com.dev.application.model.CRUDApplicationProject;

@Service
public class CRUDApplicationProjectServiceImpl implements CRUDApplicationProjectServiceInterface {

	@Autowired
	private CRUDApplicationProjectDaoInterface crudApplicationProjectDaoInterface;
	
	@Override
	public List<CRUDApplicationProject> getDetails() {
		return crudApplicationProjectDaoInterface.getDetails();
	}

	@Override
	public List<CRUDApplicationProject> insertDetail(CRUDApplicationProject crudApplicationProject) {
		return crudApplicationProjectDaoInterface.insertDetail(crudApplicationProject);
	}

	@Override
	public List<CRUDApplicationProject> updateDetail(CRUDApplicationProject crudApplicationProject) {
		return crudApplicationProjectDaoInterface.updateDetail(crudApplicationProject);
	}

	@Override
	public List<CRUDApplicationProject> deleteDetail(int id) {
		return crudApplicationProjectDaoInterface.deleteDetail(id);
	}

	
	
}
