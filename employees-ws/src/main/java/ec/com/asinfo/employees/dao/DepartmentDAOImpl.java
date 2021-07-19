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
	public Department save(Department object) {
		// TODO Auto-generated method stub
		return departmentrepo.save(object);
	}

	@Override
	public void update(Department object) {
		// TODO Auto-generated method stub
		departmentrepo.save(object);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		departmentrepo.deleteById(id);
	}

}