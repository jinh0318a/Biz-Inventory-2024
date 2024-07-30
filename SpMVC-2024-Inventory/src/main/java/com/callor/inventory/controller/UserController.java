package com.callor.inventory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.callor.inventory.dao.UserDao;
import com.callor.inventory.model.UserVO;
import com.callor.inventory.service.UserService;

@RequestMapping(value = "/user")
@Controller
public class UserController {

	private final UserDao userDao;
	private final UserService userService;

	public UserController(UserDao userDao, UserService userService) {
		super();
		this.userDao = userDao;
		this.userService = userService;
	}

	@RequestMapping(value = "/login-user", method = RequestMethod.GET)
	public String login() {
		return null;
	}

	@RequestMapping(value = "/login-user", method = RequestMethod.POST)
	public String login(String id, String password) {
		return "redirect:/";
	}

	@RequestMapping(value = "/join-user", method = RequestMethod.GET)
	public String join() {
		return null;
	}

	@RequestMapping(value = "/join-user", method = RequestMethod.POST)
	public String join(UserVO userVO) {
		userDao.insert(userVO);
		return "redirect:/";
	}

}
