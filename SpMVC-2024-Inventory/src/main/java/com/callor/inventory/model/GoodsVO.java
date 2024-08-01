package com.callor.inventory.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GoodsVO {
	private String g_code;
	private String g_storecode;
	private String g_name;
	private String g_price;
	private String g_count;
}
