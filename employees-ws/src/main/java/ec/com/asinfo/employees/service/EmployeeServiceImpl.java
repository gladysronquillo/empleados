package ec.com.asinfo.employees.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ec.com.asinfo.employees.dao.EmployeeDAO;
import ec.com.asinfo.employees.models.entity.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeDAO employeedao;
	
	/*public EmployeeServiceImpl(EmployeeDAO dao) {
		this.employeedao = dao;
	}*/
	@Override
	public List<Employee> listAll() {
		// TODO Auto-generated method stub
		return employeedao.listAll();
	}

	@Override
	public Employee findById(Long id) {
		// TODO Auto-generated method stub
		return employeedao.findById(id);
	}

	@Override
	public Employee save(Employee object) {
		// TODO Auto-generated method stub
		return employeedao.save(object);
	}

	@Override
	public void update(Employee object) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		
	}

}
