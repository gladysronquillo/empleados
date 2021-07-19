package ec.com.asinfo.employees.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ec.com.asinfo.employees.core.util.model.dto.SelectorDTO;
import ec.com.asinfo.employees.models.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>  {

	@Query("SELECT e "
			+ "FROM Employee e "
			+ "WHERE e.status IS TRUE ")
	List<Employee> findAll();
	
	@Query("SELECT new ec.com.asinfo.employees.core.util.model.dto.SelectorDTO(e.id, e.person.surnames) "
			+ "FROM Employee e "
			+ "WHERE e.status IS TRUE ")
	List<SelectorDTO> findForSelector();
	
	@Query("SELECT e "
			+ "FROM Employee e "
			+ "JOIN e.person p "
			+ "WHERE p.identification = :identification  ")
	Employee findByIdentification(String identification);
	
	@Query("SELECT e "
			+ "FROM Employee e "
			+ "WHERE e.department.id = :departmentId ")
	List<Employee> findByDepartmentId(Long departmentId);
	
	@Query("SELECT e "
			+ "FROM Employee e "
			+ "WHERE e.supervisor.id = :supervidorId ")
	List<Employee> findBySupervisorId(Long supervidorId);
}
