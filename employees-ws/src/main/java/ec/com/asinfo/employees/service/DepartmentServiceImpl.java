package ec.com.asinfo.employees.service;

import java.util.List;

import javax.transaction.Transactional;

import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ec.com.asinfo.employees.dao.DepartmentDAO;
import ec.com.asinfo.employees.dao.EmployeeDAO;
import ec.com.asinfo.employees.models.entity.Department;
import ec.com.asinfo.employees.models.entity.Employee;

@Service
public class DepartmentServiceImpl implements DepartmentService {

	@Autowired
	private DepartmentDAO departmentdao;
	@Autowired
	private EmployeeDAO employeedao;

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
		if (object.getId() == null) {
			Department found = departmentdao.findByName(object.getName());
			if (found != null) {
				found.setStatus(Boolean.TRUE);
				object = found;
			}
		}
		return departmentdao.save(object);
	}

	@Override
	@Transactional
	public boolean delete(Long id) {
		List<Employee> employees = employeedao.findByDepartmentId(id);
		if(CollectionUtils.isNotEmpty(employees)) {
			return Boolean.FALSE;
		}else {
			Department department = departmentdao.findById(id);
			department.setStatus(Boolean.FALSE);
			return Boolean.TRUE;
		}		
	}

}
