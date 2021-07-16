package ec.com.asinfo.employees.models.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import ec.com.asinfo.employees.core.util.model.entity.Base;
import ec.com.asinfo.employees.core.util.utility.AppConstants;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "departamento", schema = AppConstants.SCHEMA)
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Department extends Base {

	@Column(name = "nombre", length = 200)
	private String name;

	@Column(name = "descripcion", length = 50)
	private String description;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
