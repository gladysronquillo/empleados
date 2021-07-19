package ec.com.asinfo.employees.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ec.com.asinfo.employees.models.entity.Department;
import ec.com.asinfo.employees.repository.DepartmentRepository;

@Repository
public class DepartmentDAOImpl implements DepartmentDAO {

	@Autowired
	private DepartmentRepository departmentrepo;
	
	@Override
	public List<Department> listAll() {
		// TODO Auto-generated method stub
		return departmentrepo.findAll();
	}

	@Override
	public Department findById(Long id) {
		// TODO Auto-generated method stub
		return departmentrepo.findById(id).get();
	}
	
	@Override
	public Department findByName(String name) {
		return departmentrepo.findByName(name);
	}

	@Override
	public Department save(Department object) {
		return departmentrepo.save(object);
	}

	@Override
	public boolean delete(Long id) {
		// TODO Auto-generated method stub
		departmentrepo.deleteById(id);
		return Boolean.TRUE;
	}

}
