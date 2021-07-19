package ec.com.asinfo.employees.models.entity;

import java.math.BigDecimal;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import ec.com.asinfo.employees.core.util.model.entity.Base;
import ec.com.asinfo.employees.core.util.utility.AppConstants;

@Entity
@Table(name = "empleado", schema = AppConstants.SCHEMA)
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Employee extends Base {
	
	@Column(name = "salario")
    private BigDecimal salary;

	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, optional = false)
	@JoinColumn(name = "persona", nullable = false)
	protected Person person;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
	@JoinColumn(name = "supervisor", insertable = false, updatable = false)
	private Employee supervisor;
	
	@Column(name = "supervisor", nullable = true)
	private Long supervisorId;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
	@JoinColumn(name = "departamento", insertable = false, updatable = false)
	private Department department;
	
	@Column(name = "departamento", nullable = false)
	private Long departmentId;

	public BigDecimal getSalary() {
		return salary;
	}

	public void setSalary(BigDecimal salary) {
		this.salary = salary;
	}

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	public Employee getSupervisor() {
		return supervisor;
	}

	public void setSupervisor(Employee supervisor) {
		this.supervisor = supervisor;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	public Long getSupervisorId() {
		return supervisorId;
	}

	public Long getDepartmentId() {
		return departmentId;
	}

	public void setSupervisorId(Long supervisorId) {
		this.supervisorId = supervisorId;
	}

	public void setDepartmentId(Long departmentId) {
		this.departmentId = departmentId;
	}
	

}
