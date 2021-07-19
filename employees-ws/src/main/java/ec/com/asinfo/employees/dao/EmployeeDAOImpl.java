package ec.com.asinfo.employees.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ec.com.asinfo.employees.core.util.model.dto.SelectorDTO;
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
		return employeeRepo.findById(id).get();
	}	
	
	@Override
	public Employee findByIdentification(String identification) {
		return employeeRepo.findByIdentification(identification);
	}
	
	@Override
	public List<Employee> findByDepartmentId(Long departmentId) {
		return employeeRepo.findByDepartmentId(departmentId);
	}
	
	@Override
	public List<SelectorDTO> findForSelector() {
		// TODO Auto-generated method stub
		return employeeRepo.findForSelector();
	}

	@Override
	public Employee save(Employee object) {		
		return employeeRepo.save(object);
	}

	@Override
	public boolean delete(Long id) {
		employeeRepo.deleteById(id);
		return Boolean.TRUE;
	}

}
