package ec.com.asinfo.employees.service;

import java.util.List;

import javax.transaction.Transactional;

import org.apache.commons.collections4.CollectionUtils;
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
	public List<Employee> findBySupervisorId(Long supervisorId) {
		return employeedao.findBySupervisorId(supervisorId);
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
				found.getPerson().setEmail(object.getPerson().getEmail());
				object = found;
			}
		}
		return employeedao.save(object);
	}

	@Override
	@Transactional
	public boolean delete(Long id) {		
		List<Employee> employees = employeedao.findBySupervisorId(id);
		if(CollectionUtils.isNotEmpty(employees)) {
			return Boolean.FALSE;
		}else {
			Employee employee = employeedao.findById(id);
			employee.setStatus(Boolean.FALSE);
			return Boolean.TRUE;
		}	
	}

}
