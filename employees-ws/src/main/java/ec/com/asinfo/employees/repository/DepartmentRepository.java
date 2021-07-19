package ec.com.asinfo.employees.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ec.com.asinfo.employees.models.entity.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long>  {

	@Query("SELECT d "
			+ "FROM Department d "
			+ "WHERE d.status IS TRUE ")
	List<Department> findAll();
	
	Department findByName(String name);

}
