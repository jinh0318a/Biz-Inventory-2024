package com.callor.inventory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = "/manager")
public class ManagerController {

	@RequestMapping(value = "/join-manager", method = RequestMethod.GET)
	public String join() {
		return null;
	}
}
