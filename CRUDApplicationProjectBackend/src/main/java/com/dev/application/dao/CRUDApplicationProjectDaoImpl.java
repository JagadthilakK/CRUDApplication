package com.dev.application.dao;

import java.util.*;
import com.dev.application.model.CRUDApplicationProject;
import org.springframework.stereotype.Repository;

@Repository
public class CRUDApplicationProjectDaoImpl implements CRUDApplicationProjectDaoInterface {

	static List<CRUDApplicationProject> details = new LinkedList<>();
	
	static {
		details.add(new CRUDApplicationProject(1, "Jagad", 23, "Chennai"));
		details.add(new CRUDApplicationProject(2, "Karki", 27, "Salem"));
		details.add(new CRUDApplicationProject(3, "Mona", 30, "Madurai"));
		details.add(new CRUDApplicationProject(4, "Aabhii", 23, "ECR"));
		details.add(new CRUDApplicationProject(5, "Bheem", 27, "Dolakpur"));
		details.add(new CRUDApplicationProject(6, "Gayathri", 23, "Chennai"));
		details.add(new CRUDApplicationProject(7, "Kokki Kumar", 23, "California"));
		details.add(new CRUDApplicationProject(8, "Chan", 27, "Hyedrabad"));
		details.add(new CRUDApplicationProject(9, "Madan", 30, "Bengaluru"));
	}
	
	@Override
	public List<CRUDApplicationProject> getDetails() {
		return details;
	}

	@Override
	public List<CRUDApplicationProject> insertDetail(CRUDApplicationProject crudApplicationProject) {
		details.add(crudApplicationProject);
		return null;
	}

	@Override
	public List<CRUDApplicationProject> updateDetails(CRUDApplicationProject crudApplicationProject) {
		for(int i=0;i<details.size();i++) {
			CRUDApplicationProject current = details.get(i);
			if(current.getId()==crudApplicationProject.getId()) {
				details.set(i, crudApplicationProject);
				break;
			}
		}
		return details;
	}

	@Override
	public List<CRUDApplicationProject> deleteDetail(int id) {
		for(CRUDApplicationProject detail : details) {
			if(detail.getId()==id) {
				details.remove(detail);
				break;
			}
		}
		return details;
	}

	
	
}
