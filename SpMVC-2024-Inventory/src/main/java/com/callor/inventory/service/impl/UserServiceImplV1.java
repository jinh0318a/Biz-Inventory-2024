package com.callor.inventory.service.impl;

import org.springframework.stereotype.Service;

import com.callor.inventory.dao.UserDao;
import com.callor.inventory.service.UserService;

@Service
public class UserServiceImplV1 implements UserService {

	private final UserDao userDao;

	public UserServiceImplV1(UserDao userDao) {
		super();
		this.userDao = userDao;
	}

}
