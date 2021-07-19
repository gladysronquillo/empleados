package ec.com.asinfo.employees.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ec.com.asinfo.employees.core.util.model.dto.SelectorDTO;
import ec.com.asinfo.employees.dao.EmployeeDAO;
import ec.com.asinfo.employees.models.entity.Department;
import ec.com.asinfo.employees.models.entity.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeDAO employeedao;

	/*
	 * public EmployeeServiceImpl(EmployeeDAO dao) { this.employeedao = dao; }
	 */
	@Override
	public List<Employee> listAll() {
		return employeedao.listAll();
	}

	@Override
	public Employee findById(Long id) {
		return employeedao.findById(id);
	}
	
	@Override
	public List<SelectorDTO> findForSelector() {
		return employeedao.findForSelector();
	}

	@Override
	public Employee save(Employee object) {
		if (object.getId() == null) {
			Employee found = employeedao.findByIdentification(object.getPerson().getIdentification());
			if (found != null) {
				found.setStatus(Boolean.TRUE);
				found.setSalary(object.getSalary());
				found.setDepartmentId(object.getDepartmentId());
				found.setSupervisorId(object.getSupervisorId());
				object = found;
			}
		}
		return employeedao.save(object);
	}

	@Override
	public boolean delete(Long id) {		
		return Boolean.TRUE;
	}

}
