package ec.com.asinfo.employees.models.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PostLoad;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import ec.com.asinfo.employees.core.util.model.entity.Base;
import ec.com.asinfo.employees.core.util.utility.AppConstants;

@Entity
@Table(name = "persona", schema = AppConstants.SCHEMA)
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Person extends Base {

    @Column(name = "nombres", length = 60)
    private String names;

    @Column(name = "apellidos", length = 60)
    private String surnames;

    @Column(name = "identificacion", length = 60)
    private String identification;

    @Column(name = "correo", length = 60)
    private String email;

    @Transient
    private String fullName;
   
    public String getNames() {
		return names;
	}


	public void setNames(String names) {
		this.names = names;
	}


	public String getSurnames() {
		return surnames;
	}


	public void setSurnames(String surnames) {
		this.surnames = surnames;
	}


	public String getIdentification() {
		return identification;
	}


	public void setIdentification(String identification) {
		this.identification = identification;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getFullName() {
		return fullName;
	}


	public void setFullName(String fullName) {
		this.fullName = fullName;
	}


	@PostLoad
    private void postLoad() {
        this.fullName = names.concat(" ").concat(surnames);
    }

}
