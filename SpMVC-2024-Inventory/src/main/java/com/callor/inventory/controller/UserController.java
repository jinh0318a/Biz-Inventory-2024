package com.callor.inventory.controller;

import javax.servlet.http.HttpSession;

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
	public String login(String u_id, String u_password, HttpSession session) {
		UserVO userVO = userDao.findByID(u_id);
		if (userVO == null || !userVO.getU_password().equals(u_password)) {
			return "redirect:/user/login-user";
		}
		session.setAttribute("USER", userVO);
		return "redirect:/";
	}

	@RequestMapping(value = "/join-user", method = RequestMethod.GET)
	public String join() {
		return null;
	}

	@RequestMapping(value = "/join-user", method = RequestMethod.POST)
	public String join(UserVO userVO) {
		UserVO findUser = userDao.findByID(userVO.getU_id());
		if (findUser != null) {
			return "redirect:/user/join-user";
		}
		userDao.insert(userVO);
		return "redirect:/user/login-user";
	}

	@RequestMapping(value = "/modify", method = RequestMethod.GET)
	public String modify(HttpSession session) {
		UserVO userVO = (UserVO) session.getAttribute("USER");
		if (userVO == null) {
			return "redirect:/user/login-user";
		}
		return null;
	}

}
