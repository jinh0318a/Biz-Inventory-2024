package com.callor.inventory.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CommentVO {
	private String c_code;
	private String c_body;
	private String c_writer;
	private String c_writed_at;
	private String c_boardcode;
}
