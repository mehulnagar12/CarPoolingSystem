package com.example.backend.Services;

import java.util.Collection;

import com.example.backend.Model.Rider;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomRiderDetails implements UserDetails {

    /**
	 *
	 */
    private static final long serialVersionUID = 1L;
    
    private Rider rider;

	@Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return rider.getRider_password();
    }

    @Override
    public String getUsername() {
        return rider.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}