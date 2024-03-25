export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      acheter_louer: {
        Row: {
          id: number
          img: string | null
          nom: string
        }
        Insert: {
          id?: number
          img?: string | null
          nom: string
        }
        Update: {
          id?: number
          img?: string | null
          nom?: string
        }
        Relationships: []
      }
      celebrite: {
        Row: {
          age: number | null
          id: number
          image: string | null
          nb_films: number | null
          nom: string
          prenom: string | null
          pays: string | null
        }
        Insert: {
          age?: number | null
          id?: number
          image?: string | null
          nb_films?: number | null
          nom: string
          prenom?: string | null
          pays?: string | null
        }
        Update: {
          age?: number | null
          id?: number
          image?: string | null
          nb_films?: number | null
          nom?: string
          prenom?: string | null
          pays?: string | null
        }
        Relationships: []
      }
      film_acheter_louer: {
        Row: {
          film: number
          prix: string | null
          site_achat: number
        }
        Insert: {
          film: number
          prix?: string | null
          site_achat: number
        }
        Update: {
          film?: number
          prix?: string | null
          site_achat?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_acheter_louer_acheter_louer_fkey"
            columns: ["site_achat"]
            isOneToOne: false
            referencedRelation: "acheter_louer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_acheter_louer_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
          
        ]
      }
      film_celebrite: {
        Row: {
          celebrite: number
          film: number
        }
        Insert: {
          celebrite: number
          film: number
        }
        Update: {
          celebrite?: number
          film?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_celebrite_film_celebrite_fkey"
            columns: ["celebrite"]
            isOneToOne: false
            referencedRelation: "celebrite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_celebrite_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
        ]
      }
      film_genre: {
        Row: {
          film: number
          genre: number
        }
        Insert: {
          film: number
          genre: number
        }
        Update: {
          film?: number
          genre?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_genre_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_genre_genre_fkey"
            columns: ["genre"]
            isOneToOne: false
            referencedRelation: "genre"
            referencedColumns: ["id"]
          },
        ]
      }
      film_plateforme: {
        Row: {
          film: number
          plateforme: number
        }
        Insert: {
          film: number
          plateforme: number
        }
        Update: {
          film?: number
          plateforme?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_plateforme_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_plateforme_plateforme_fkey"
            columns: ["plateforme"]
            isOneToOne: false
            referencedRelation: "plateforme"
            referencedColumns: ["id"]
          },
        ]
      }
      film_realisateur: {
        Row: {
          film: number
          realisateur: number
        }
        Insert: {
          film: number
          realisateur: number
        }
        Update: {
          film?: number
          realisateur?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_realisateur_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_realisateur_realisateur_fkey"
            columns: ["realisateur"]
            isOneToOne: false
            referencedRelation: "realisateur"
            referencedColumns: ["id"]
          },
        ]
      }
      film_saga: {
        Row: {
          film: number
          saga: number
        }
        Insert: {
          film: number
          saga: number
        }
        Update: {
          film?: number
          saga?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_saga_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_saga_saga_fkey"
            columns: ["saga"]
            isOneToOne: false
            referencedRelation: "saga"
            referencedColumns: ["id"]
          },
        ]
      }
      film_support: {
        Row: {
          film: number
          support: number
        }
        Insert: {
          film: number
          support: number
        }
        Update: {
          film?: number
          support?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_support_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_support_support_fkey"
            columns: ["support"]
            isOneToOne: false
            referencedRelation: "support"
            referencedColumns: ["id"]
          },
        ]
      }
      film_variant: {
        Row: {
          film: number
          variant: number
        }
        Insert: {
          film: number
          variant: number
        }
        Update: {
          film?: number
          variant?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_variant_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_variant_variant_fkey"
            columns: ["variant"]
            isOneToOne: false
            referencedRelation: "variants"
            referencedColumns: ["id"]
          },
        ]
      }
      films: {
        Row: {
          affiche: string | null
          bande_annonce: string | null
          banner: string | null
          date_sortie: number | null
          duree: string | null
          id: number
          note: number | null
          pays: string | null
          synopsis: string | null
          titre: string
        }
        Insert: {
          affiche?: string | null
          bande_annonce?: string | null
          banner?: string | null
          date_sortie?: number | null
          duree?: string | null
          id?: number
          note?: number | null
          pays?: string | null
          synopsis?: string | null
          titre: string
        }
        Update: {
          affiche?: string | null
          bande_annonce?: string | null
          banner?: string | null
          date_sortie?: number | null
          duree?: string | null
          id?: number
          note?: number | null
          pays?: string | null
          synopsis?: string | null
          titre?: string
        }
        Relationships: []
      }
      genre: {
        Row: {
          id: number
          libelle: string
        }
        Insert: {
          id?: number
          libelle: string
        }
        Update: {
          id?: number
          libelle?: string
        }
        Relationships: []
      }
      plateforme: {
        Row: {
          Abonnement: boolean | null
          id: number
          img: string | null
          nom: string
        }
        Insert: {
          Abonnement?: boolean | null
          id?: number
          img?: string | null
          nom: string
        }
        Update: {
          Abonnement?: boolean | null
          id?: number
          img?: string | null
          nom?: string
        }
        Relationships: []
      }
      realisateur: {
        Row: {
          age: number | null
          id: number
          nb_films: number | null
          nom: string
          pays: string | null
          prenom: string | null
        }
        Insert: {
          age?: number | null
          id?: number
          nb_films?: number | null
          nom: string
          pays?: string | null
          prenom?: string | null
        }
        Update: {
          age?: number | null
          id?: number
          nb_films?: number | null
          nom?: string
          pays?: string | null
          prenom?: string | null
        }
        Relationships: []
      }
      saga: {
        Row: {
          id: number
          libelle: string
        }
        Insert: {
          id?: number
          libelle: string
        }
        Update: {
          id?: number
          libelle?: string
        }
        Relationships: []
      }
      support: {
        Row: {
          id: number
          support_img: string | null
          support_type: string
        }
        Insert: {
          id?: number
          support_img?: string | null
          support_type: string
        }
        Update: {
          id?: number
          support_img?: string | null
          support_type?: string
        }
        Relationships: []
      }
      variants: {
        Row: {
          id: number
          type: string
        }
        Insert: {
          id?: number
          type: string
        }
        Update: {
          id?: number
          type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
    PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
    PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof PublicSchema["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never
