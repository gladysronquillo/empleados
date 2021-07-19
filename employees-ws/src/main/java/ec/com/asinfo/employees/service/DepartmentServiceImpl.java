package ec.com.asinfo.employees.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ec.com.asinfo.employees.dao.DepartmentDAO;
import ec.com.asinfo.employees.models.entity.Department;

@Service
public class DepartmentServiceImpl implements DepartmentService {

	@Autowired
	private DepartmentDAO departmentdao;
	
	@Override
	public List<Department> listAll() {
		// TODO Auto-generated method stub
		return departmentdao.listAll();
	}

	@Override
	public Department findById(Long id) {
		// TODO Auto-generated method stub
		return departmentdao.findById(id);
	}

	@Override
	public Department save(Department object) {
		// TODO Auto-generated method stub
		return departmentdao.save(object);
	}

	@Override
	public void update(Department object) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		
	}

}
