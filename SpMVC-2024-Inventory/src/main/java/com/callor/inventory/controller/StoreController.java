package com.callor.inventory.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.callor.inventory.dao.StoreDao;
import com.callor.inventory.model.StoreVO;

@Controller
@RequestMapping(value = "/store")
public class StoreController {

	private final StoreDao storeDao;

	public StoreController(StoreDao storeDao) {
		super();
		this.storeDao = storeDao;
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String list(Model model) {
		List<StoreVO> storeList = storeDao.findAllStore();
		model.addAttribute("STORELIST", storeList);
		return null;
	}

	@RequestMapping(value = "/detail", method = RequestMethod.GET)
	public String detail(String s_code, Model model) {
		StoreVO storeVO = storeDao.findByCode(s_code);
		if (s_code.equals("S00001")) {
			model.addAttribute("MAP",
					"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12917.469138314484!2d127.128665!3d35.962445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357019e2516650d1%3A0x8f34075469f000d!2z7KCE652867aB64-EIOyZhOyjvOq1sCDrtInrj5nsnY0g65GU7IKwM-uhnCA5NA!5e0!3m2!1sko!2skr!4v1723012333564!5m2!1sko!2skr");
		} else if (s_code.equals("S00002")) {
			model.addAttribute("MAP",
					"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12955.478627877223!2d127.109347!3d35.729424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357030397bf8b6f3%3A0xd573d5c32c1d6476!2z7KCE652867aB64-EIOyZhOyjvOq1sCDqtazsnbTrqbQg66qo7JWF7IKw6ri4IDk1!5e0!3m2!1sko!2skr!4v1723012416120!5m2!1sko!2skr");
		} else if (s_code.equals("S00003")) {
			model.addAttribute("MAP",
					"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12944.525171358253!2d127.113717!3d35.79671!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35703b25c2f7d99b%3A0xd63e24c201ebe8af!2z7KCE652867aB64-EIOyghOyjvOyLnCDsmYTsgrDqtawg7IK87LKc7LKc67OAMuq4uCAzMw!5e0!3m2!1sko!2skr!4v1723012471583!5m2!1sko!2skr");
		} else if (s_code.equals("S00004")) {
			model.addAttribute("MAP",
					"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12937.19538786972!2d127.112059!3d35.841675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35703cbba9680bab%3A0xb948318b89f778c7!2z7KCE652867aB64-EIOyghOyjvOyLnCDrjZXsp4Tqtawg6rCA66Co7IKw66GcIDI2LTc!5e0!3m2!1sko!2skr!4v1723012535903!5m2!1sko!2skr");
		} else if (s_code.equals("S00005")) {
			model.addAttribute("MAP",
					"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6471.363542245712!2d127.10677299999999!3d35.807745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35703b3dd5c322b9%3A0x91d4f93a92983e1d!2z7KCE652867aB64-EIOyghOyjvOyLnCDsmYTsgrDqtawg7Zqo7J6Q64-ZMuqwgCAxNjMtMQ!5e0!3m2!1sko!2skr!4v1723012557365!5m2!1sko!2skr");
		}

		model.addAttribute("STORE", storeVO);
		return null;
	}

}
