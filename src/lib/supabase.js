import { createClient } from '@supabase/supabase-js';

// These will be replaced with your actual Supabase credentials
// Get them from: https://supabase.com/dashboard/project/YOUR_PROJECT/settings/api
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Content functions
export const contentService = {
  // Get all content of a type
  async getAll(type) {
    const { data, error } = await supabase
      .from('content')
      .select('*')
      .eq('type', type)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  // Get single item by ID
  async getById(id) {
    const { data, error } = await supabase
      .from('content')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Create new content
  async create(item) {
    const { data, error } = await supabase
      .from('content')
      .insert([item])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Update content
  async update(id, item) {
    const { data, error } = await supabase
      .from('content')
      .update({ ...item, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Delete content
  async delete(id) {
    const { error } = await supabase
      .from('content')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  },

  // Get content count by type
  async getCount(type) {
    const { count, error } = await supabase
      .from('content')
      .select('*', { count: 'exact', head: true })
      .eq('type', type);

    if (error) throw error;
    return count;
  }
};

// Image upload functions
export const storageService = {
  // Upload image
  async uploadImage(file, folder = 'images') {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { data, error } = await supabase.storage
      .from('media')
      .upload(filePath, file);

    if (error) throw error;

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('media')
      .getPublicUrl(filePath);

    return urlData.publicUrl;
  },

  // Delete image
  async deleteImage(url) {
    // Extract path from URL
    const path = url.split('/media/')[1];
    if (!path) return;

    const { error } = await supabase.storage
      .from('media')
      .remove([path]);

    if (error) throw error;
    return true;
  },

  // List all images
  async listImages(folder = 'images') {
    const { data, error } = await supabase.storage
      .from('media')
      .list(folder);

    if (error) throw error;
    return data;
  }
};
