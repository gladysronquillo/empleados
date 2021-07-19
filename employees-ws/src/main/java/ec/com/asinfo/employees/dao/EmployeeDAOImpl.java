package ec.com.asinfo.employees.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ec.com.asinfo.employees.models.entity.Employee;
import ec.com.asinfo.employees.repository.EmployeeRepository;

@Repository
public class EmployeeDAOImpl implements EmployeeDAO {

	@Autowired
	private EmployeeRepository employeeRepo;
	
	@Override
	public List<Employee> listAll() {
		// TODO Auto-generated method stub
		return employeeRepo.findAll();
	}

	@Override
	public Employee findById(Long id) {
		// TODO Auto-generated method stub
		return employeeRepo.findById(id).get();
	}

	@Override
	public Employee save(Employee object) {
		// TODO Auto-generated method stub
		return employeeRepo.save(object);
	}

	@Override
	public void update(Employee object) {
		// TODO Auto-generated method stub
		employeeRepo.save(object);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		employeeRepo.deleteById(id);
	}

}
