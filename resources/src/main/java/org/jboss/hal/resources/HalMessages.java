/*
 * JBoss, Home of Professional Open Source
 * Copyright 2011 Red Hat Inc. and/or its affiliates and other contributors
 * as indicated by the @author tags. All rights reserved.
 * See the copyright.txt in the distribution for a
 * full listing of individual contributors.
 *
 * This copyrighted material is made available to anyone wishing to use,
 * modify, copy, or redistribute it subject to the terms and conditions
 * of the GNU Lesser General Public License, v. 2.1.
 * This program is distributed in the hope that it will be useful, but WITHOUT A
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 * PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more details.
 * You should have received a copy of the GNU Lesser General Public License,
 * v.2.1 along with this distribution; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA  02110-1301, USA.
 */
package org.jboss.hal.resources;

import com.google.gwt.i18n.client.Messages;
import com.google.gwt.safehtml.shared.SafeHtml;

public interface HalMessages extends Messages {

    //@formatter:off
    String active_roles(String roles);
    String connected_to(String url);

    String homepage_patching_sub_header(String name);
    String homepage_patching_standalone_step_intro(String name);
    String homepage_patching_domain_step_intro(String name);

    String invalid_range(long value, long min, long max);
    String messages(@PluralCount int count);
    String pattern_mismatch(String pattern);
    SafeHtml table_info(int from, int to, int size);
    String table_named_group(String name);
    SafeHtml table_pages(int pages);
    String update_available(String current, String update);
    //@formatter:on
}