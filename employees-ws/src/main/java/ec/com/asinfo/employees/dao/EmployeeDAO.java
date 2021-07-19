package ec.com.asinfo.employees.dao;

import java.util.List;

import ec.com.asinfo.employees.core.util.model.dto.SelectorDTO;
import ec.com.asinfo.employees.models.entity.Employee;

public interface EmployeeDAO extends CRUD<Employee> {

	Employee findByIdentification(String identification);

	List<Employee> findByDepartmentId(Long departmentId);

	List<Employee> findBySupervisorId(Long supervisorId);

	List<SelectorDTO> findForSelector();
}
