package ec.com.asinfo.employees.service;

import java.util.List;

import ec.com.asinfo.employees.core.util.model.dto.SelectorDTO;
import ec.com.asinfo.employees.dao.CRUD;
import ec.com.asinfo.employees.models.entity.Employee;

public interface EmployeeService extends CRUD<Employee> {

	List<SelectorDTO> findForSelector();
}
